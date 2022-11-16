const CustomModal = (props: any) => {
  const { show, toggleModal } = props;

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div class="flex" 
      show={show}
      onMouseDown={handleClickOutside}
    >
      <div class="border-solid border-burned-gold border-4">{props.children}</div>
    </div>
  );
}

export default CustomModal
