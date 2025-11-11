<?php
add_theme_support('title-tag');

function grundtema_enqueue_styles() {
    wp_enqueue_style('grundtema-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'grundtema_enqueue_styles');
?>
