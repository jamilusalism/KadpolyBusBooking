 <section id="bg-bus" class="d-flex align-items-center">
    <div class="container text-center">
      <?php if(!isset($_SESSION['login_id'])): ?>
      	<button class="btn btn-info btn-lg" type="button" id="book_now">Book Now</button>
      <?php else: ?>
        <h2>Welcome</h2>
        <h1><?php echo $_SESSION['login_name'] ?></h1>
      <?php endif; ?>
    </div>
  </section>
  <script>
  	$('#book_now').click(function(){
      uni_modal('Find Schedule','book_filter.php')
  })
  </script>