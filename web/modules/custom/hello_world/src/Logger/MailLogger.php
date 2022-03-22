<?php

namespace Drupal\hello_world\Logger;

use Drupal\Component\Render\FormattableMarkup;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Logger\LogMessageParserInterface;
use Drupal\Core\Logger\RfcLoggerTrait;
use Drupal\Core\Logger\RfcLogLevel;
use Psr\Log\LoggerInterface;

/**
 * A logger that sends an email when the log type is "error".
 */
class MailLogger implements LoggerInterface {
  use RfcLoggerTrait;

  /**
   * @param \Drupal\Core\Config\ConfigFactoryInterface $configFactory
   * @param \Drupal\Core\Logger\LogMessageParserInterface $logMessageParser
   */
  public function __construct(protected ConfigFactoryInterface $configFactory, protected LogMessageParserInterface $logMessageParser) {}

  /**
   * {@inheritdoc}
   */
  public function log($level, $message, array $context = []) {
    if ($level !== RfcLogLevel::ERROR) {
      return;
    }
    $to = $this->configFactory->get('system.site')->get('mail');
    $langcode = $this->configFactory->get('system.site')->get('langcode');
    $variables = $this->logMessageParser->parseMessagePlaceholders($message, $context);
    $markup = new FormattableMarkup($message, $variables);
    \Drupal::service('plugin.manager.mail')->mail('hello_world', 'hello_world_log', $to, $langcode, ['message' => $markup]);//#86.


  }

}
