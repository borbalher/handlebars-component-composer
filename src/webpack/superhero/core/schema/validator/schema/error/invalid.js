/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidSchemaError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_INVALID_SCHEMA'
    }
  }

  return InvalidSchemaError
})