<?php

namespace Drupal\hello_world\EventSubscriber;

use Drupal\Core\Routing\LocalRedirectResponse;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\Core\Url;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Subscribes to the Kernel Request event and redirects to the homepage.
 */
class HelloWorldRedirectSubscriber implements EventSubscriberInterface {

  /**
   * HelloWorldRedirectSubscriber construct.
   *
   * @param \Drupal\Core\Session\AccountProxyInterface $currentUser
   *
   * @param \Drupal\Core\Routing\RouteMatchInterface $currentRouteMatch
   */
  public function __construct(protected AccountProxyInterface $currentUser, protected RouteMatchInterface $currentRouteMatch) {}

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $event[KernelEvents::REQUEST][] = ['onRequest', 0];
    return $event;
  }

  /**
   * @param \Symfony\Component\HttpKernel\Event\RequestEvent $event
   *
   * @return void
   */
  public function onRequest(RequestEvent $event) {
    $route_name = $this->currentRouteMatch->getRouteName(); // #69
    if ($route_name !== 'hello_world.hello') {
      return;
    }
    $roles = $this->currentUser->getRoles();
    if (in_array('non_grata', $roles)) {
      $url = Url::fromUri('internal:/'); // #69
      $event->setResponse(new LocalRedirectResponse($url->toString()));
    }
  }
}
