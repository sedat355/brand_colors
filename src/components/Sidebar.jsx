import { useState } from "react"
import Modal from "react-modal"
import { GrClose } from "react-icons/gr"

function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => setModalIsOpen(!modalIsOpen)

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand <b>Colors</b>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>

        <nav className="menu">
          <ul>
            <li>
              <a>Suggest a Brand</a>
            </li>
            <li>
              <a onClick={toggleModal}>About BraundColors</a>
            </li>
          </ul>
        </nav>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="modal-close-btn" onClick={toggleModal}>
          <GrClose/>
        </button>
        <h3>About BrandColors</h3>
        <p>BrandColors was created by <strong>DesignBombs</strong>. The goal was to create a helpful reference for the brand color codes that are needed most often.
        </p>
        <p>It has been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <strong>2 million pageviews</strong>. There are now over 600 brands with 1600 colors and the collection is always growing.
        </p>
      </Modal>
    </>
  )
}

export default Sidebar
