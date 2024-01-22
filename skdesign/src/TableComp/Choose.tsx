function Choose({
  onHandleNavigationLess,
  onHandleNavigationBig,
  big,
  less,
}: {
  onHandleNavigationLess: () => void;
  onHandleNavigationBig: () => void;
  big: boolean;
  less: boolean;
}) {
  return (
    <div className="choose_container">
      <div
        className={`choose_item ${less ? 'selected' : 'disabled'}`}
        onClick={onHandleNavigationLess}
      >
        Малый объем данных
      </div>
      <div
        className={`choose_item ${big ? 'selected' : 'disabled'}`}
        onClick={onHandleNavigationBig}
      >
        Большой объем данных
      </div>
    </div>
  );
}

export default Choose;
