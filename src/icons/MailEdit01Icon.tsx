import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailEdit01Icon({
  iconName = 'mail-edit-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
