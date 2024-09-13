import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailSend01Icon({
  iconName = 'mail-send-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
