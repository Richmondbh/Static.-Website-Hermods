<?php
/*
Template Name: Mall med sidebar
*/
get_header();
?>

<div class="main-layout">
  <div id="content">
    <article>
      <section>
        <?php
        if (have_posts()) :
          while (have_posts()) :
            the_post();
            get_template_part('content', get_post_format());
          endwhile;
        endif;
        the_content();
        ?>
      </section>
    </article>
  </div>

  <?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
