
function modalEdit(id, titulo, noticia) {
    var sei_la = document.getElementById("sei_la");
  
    if (sei_la) {
    html = `  
    <div class="modal fade" id="backDropModal" data-bs-backdrop="static" tabindex="-1">
    <div class="modal-dialog">
      <form class="modal-content needs-validation" id="form-id" action="/noticia/editar" method="post" novalidate>
        <div class="modal-header">
          <h5 class="modal-title" id="backDropModalTitle">ID:  ${id}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label for="nameBackdrop" class="form-label">Titulo da Notícia</label>
              <input type="text" id="nameBackdrop" class="form-control" name="titulo" value='${titulo}' required />
              <input type="hidden" id="idBackdrop" class="form-control" name="id" value='${id}' required />
            </div>
          </div>
          <div class="row g-2">
            <div class="col mb-0">
              <label for="dobBackdrop" class="form-label">Conteudo da notícia</label>
              <textarea class="form-control" placeholder="Do que se trata a notícia?" autocomplete="off" name="noticia" id="textArea2" rows="2" required>${noticia}</textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  </div>
  `;
    } else {
      console.error("Element with id 'sei_la' not found!");
    }
  
    sei_la.innerHTML = html;
  }
  
  
  
  var forms = document.getElementsByClassName('needs-validation');
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
  
        Swal.fire({
          icon: 'error',
          title: 'Falha ao enviar',
          text: 'Algum campo do formulario esta incompleto...!!',
          confirmButtonText: 'OK'
        });
  
      } else {
        event.preventDefault();
        Swal.fire({
          icon: 'success',
          title: 'Validação bem sucedida!',
          text: 'Seus dados foram enviados com sucesso...!!',
          confirmButtonText: 'OK'
        });
        form.submit(); // aqui estava forms.submit(), deve ser form.submit()
      }
      form.classList.add('was-validated');
    }, false);
  });