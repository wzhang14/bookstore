import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subTitle="us"></Title>
      <div className={styles.center}>
        <form
          action="https://formspree.io/emiliezhang@hotmail.ca"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
            />
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
            />
          </div>
          <div>
            <input type="submit" value="Send" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
