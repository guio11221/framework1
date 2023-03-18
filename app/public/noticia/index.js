

function modalEdit(id, titulo, noticia) {
  var sei_la = document.getElementById("sei_la");

  html = `  
<div
class="modal fade"
id="backDropModal"
data-bs-backdrop="static"
tabindex="-1"
>
<div class="modal-dialog">
  <form class="modal-content needs-validation" id="form-id" action="/noticia/editar" method="post" novalidate>
    <div class="modal-header">
      <h5 class="modal-title" id="backDropModalTitle">ID:  ${id}</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col mb-3">
          <label for="nameBackdrop" class="form-label">Titulo da Notícia</label>
          <input
            type="text"
            id="nameBackdrop"
            class="form-control"
            name="titulo"
            value ='${titulo}'
            
          />
          <input
          type="hidden"
          id="nameBackdrop"
          class="form-control"
          name="id"
          value ='${id}'
          
        />
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
      <button
        type="button"
        class="btn btn-outline-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </form>
</div>
</div>`;

  sei_la.innerHTML = html;
}