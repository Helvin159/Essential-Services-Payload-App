'use client'
import React, { useEffect } from 'react'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'

const ContactProviderModal = ({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) => {
  UIkit.use(Icons)

  useEffect(() => {
    UIkit.modal(`#${id}`)
  }, [id])

  return (
    <div id={id} className="contact-provider-modal uk-flex-top">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button className="uk-modal-close-default" type="button" uk-close="true">
          Close
        </button>
        <h2 className="uk-modal-title">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default ContactProviderModal
