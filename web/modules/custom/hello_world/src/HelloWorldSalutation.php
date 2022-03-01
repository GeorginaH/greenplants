<?php

namespace Drupal\hello_world;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

/**
 * Salutation class.
 */
class HelloWorldSalutation {

  use StringTranslationTrait;

  /**
   * HelloWorldSalutation constructor.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $configFactory
   *
   * @param \Symfony\Component\EventDispatcher\EventDispatcherInterface $eventDispatcher
   */
  public function __construct(protected ConfigFactoryInterface $configFactory, protected EventDispatcherInterface $eventDispatcher) {}

  /**
   * Get the salutation message.
   *
   * @return array|\Drupal\Core\StringTranslation\TranslatableMarkup|mixed|void
   */
  public function getSalutation() {
    $config = $this->configFactory->get('hello_world.custom_salutation');
    $salutation = $config->get('salutation');
    if ($salutation !== "" && $salutation) {
      // return $salutation;
      $event = new SalutationEvent();
      $event->setValue('Hello new bonnie.');
      $event = $this->eventDispatcher->dispatch(SalutationEvent::EVENT, $event);
      return $event->getValue();
    }

    $time = new \Datetime();
    if ((int) $time->format('G') >= 00 && (int) $time->format('G') < 12) {
      return $this->t('Good morning world.');
    }
    if ((int) $time->format('G') >= 12 && (int) $time->format('G') < 18) {
      return $this->t('Good afternoon world.');
    }
    if ((int) $time->format('G') >= 18) {
      return $this->t('Good evening world.');
    }
  }

}
