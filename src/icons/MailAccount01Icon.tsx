import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailAccount01Icon({
  iconName = 'mail-account-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
