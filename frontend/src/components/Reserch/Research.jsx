import Search from "@components/Search/Search";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "20%",
    left: "20%",
    right: "20%",
    bottom: "20%",
  },
};

export default function Research() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("Official Music Video");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button type="submit" onClick={openModal}>
        Jouer
      </button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="ExempleModal"
      >
        <form>
          <button type="submit" onClick={closeModal}>
            X
          </button>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </form>
      </Modal>
    </>
  );
}
