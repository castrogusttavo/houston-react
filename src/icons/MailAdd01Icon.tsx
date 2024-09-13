import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailAdd01Icon({
  iconName = 'mail-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
