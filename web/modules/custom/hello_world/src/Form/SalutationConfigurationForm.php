<?php

namespace Drupal\hello_world\Form;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Logger\LoggerChannelInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Configuration form definition for the salutation message.
 * @package Drupal\hello_world\Form
 */
class SalutationConfigurationForm extends ConfigFormBase {

  /**
   * SalutationConfigurationForm constructor.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The factory for configuration objects.
   * @param \Drupal\Core\Logger\LoggerChannelInterface $logger
   *   The logger.
   */
  public function __construct(protected ConfigFactoryInterface $config_factory, protected LoggerChannelInterface $logger) {
    parent::__construct($config_factory);
  }

  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('hello_world.logger.channel.hello_world')
    );
  }

  /**
   * {@inheritdoc }
   */
  protected function getEditableConfigNames() {
    return ['hello_world.custom_salutation'];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'salutation_configuration_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('hello_world.custom_salutation');
    $form['salutation'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Salutation'),
      '#description' => $this->t('Please provide the salutation you want to use'),
      '#default_value' => $config->get('salutation'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    $salutation = $form_state->getValue('salutation');
    if ($salutation) {
      if (strlen($salutation) > 20 ) {
        $form_state->setErrorByName('salutation', $this->t('This salutation is too long.'));
      }    }

    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('hello_world.custom_salutation')
      ->set('salutation', $form_state->getValue('salutation'))
      ->save();

    $this->logger->info("The Hello World salutation has been changed to @message.", ['@message' => $form_state->getValue('salutation')]); // #81

    parent::submitForm($form, $form_state);
  }

}
