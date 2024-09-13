import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailSend02Icon({
  iconName = 'mail-send-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
