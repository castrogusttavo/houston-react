import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailBlock01Icon({
  iconName = 'mail-block-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
