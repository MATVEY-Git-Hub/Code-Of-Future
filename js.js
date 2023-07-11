function full() {
      Toastify({
        text: 'Здесь пока ничего нет, чисто для красоты',
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #cc2e55, #cc2e55)",
        },
        onClick: function () { }
      }).showToast();
      return;
    }

function github() {
    window.open('https://github.com/MATVEY-Git-Hub/Code-Of-Future', '_blank');
  }