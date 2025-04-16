const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
<script>
  const toggleButton = document.querySelector('.mode-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
</script>
