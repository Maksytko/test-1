function getSearchParams() {
  return new URLSearchParams(new URL(window.location.href).search);
}

export default getSearchParams;
