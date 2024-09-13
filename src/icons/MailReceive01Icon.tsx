import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailReceive01Icon({
  iconName = 'mail-receive-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
