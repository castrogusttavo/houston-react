import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailSecure01Icon({
  iconName = 'mail-secure-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
