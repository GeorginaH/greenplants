<?php

namespace Drupal\hello_world;

use Drupal\Component\EventDispatcher\Event;

/**
 * Event class to be dispatched from the HelloWorldSalutation service.
 */
class SalutationEvent extends Event {

  const EVENT = 'hello_world.salutation_event';

  /**
   * The salutation message.
   */
  protected string $message;

  /**
   * @return string
   */
  public function getValue(): string {
    return $this->message;
  }

  /**
   * @param string $message
   *
   * @return void
   */
  public function setValue(string $message): void {
    $this->message = $message;

  }

}
