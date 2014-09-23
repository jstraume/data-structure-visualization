<div data-ng-controller="notesController">
  <button data-ng-click="deleteAll()">Sacrifice All to the MonGOD</button></br>
  <form name="newnoteform">
    <label data-ng-show="newnoteform.$dirty && newnoteform.$invalid">Note can't be blank</label>
    <input type="text" required data-ng-model="newNote.noteBody">
    <button data-ng-disabled="newnoteform.$invalid" data-ng-click="saveNewNote()">Save Note</button>
  </form>
  <div data-ng-repeat="note in notes">
    <p>
      <div data-ng-show="note.editing">
        <form name="noteform">
          <label data-ng-show="noteform.$invalid">Note can't be blank</label>
          <input required data-ng-model="note.noteBody"/>
          <button data-ng-disabled="noteform.$invalid" data-ng-click="saveNote(note)">Save Changes</button>
          <button data-ng-click="cancelEdit(note, noteform)">Cancel</button>
        </form>
      </div>

      <div data-ng-hide="note.editing">
        {{note.noteBody | sentencify}}
        <button data-ng-click="editNote(note)">Edit Note</button>
        <button data-ng-click="deleteNote(note)">Delete Note</button>
      </div>
    </p>
  </div>
</div>  
