
let forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })


   /*  <select class="form-select" id="validationDefault04" required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
              </select> */