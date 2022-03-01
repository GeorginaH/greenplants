<?php

namespace Drupal\hello_world\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\hello_world\HelloWorldSalutation;
use Symfony\Component\DependencyInjection\ContainerInterface;


/**
 * Controller for the salutation message.
 */
class HelloWorldController extends ControllerBase {

  /**
   * HelloWorldController constructor.
   *
   * @param \Drupal\hello_world\HelloWorldSalutation $salutation
   */
  public function __construct(protected HelloWorldSalutation $salutation) {}

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('hello_world.salutation')
    );
  }

  /**
   * Hello World message.
   *
   * @return array
   * Our message.
   */
  public function helloWorld() {
    return [
      '#markup' => $this->salutation->getSalutation(),
    ];
//    return new \Symfony\Component\HttpFoundation\Response('my text');
//    return new \Symfony\Component\HttpFoundation\RedirectResponse('/node/1');
  }
}
