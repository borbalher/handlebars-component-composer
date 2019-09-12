// eslint-disable-next-line no-undef
define(['superhero/core/bus/bootstrap/index'], function(BusBootstrap)
{
  class BusBootstrapLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const
      configuration = this.locator.locate('core/configuration'),
      bus           = this.locator.locate('core/bus')

      return new BusBootstrap(configuration, bus, this.locator)
    }
  }

  return BusBootstrapLocator
})