function ListGroup() {
    
 const   items=['Kigali','Northern','Southern','Western','Eastern'];
 items.map(item=><li>{item}</li>);
  return (
    <>
        <h1>List Group </h1>
        <ul className="list-group">
         
        </ul>
    </>
  );
}

export default ListGroup;
