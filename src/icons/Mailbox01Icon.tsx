import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mailbox01Icon({
  iconName = 'mailbox-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
