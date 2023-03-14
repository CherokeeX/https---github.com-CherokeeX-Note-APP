
const Navbar =({notes})=> {

    return (
<div className="navbar">
    <h1>NoteAPP</h1>
    <p>Toplam {notes.length} adet Not kaydedilmistir</p>
</div>

    );
}

export default Navbar;