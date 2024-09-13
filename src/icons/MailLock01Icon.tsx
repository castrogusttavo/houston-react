import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailLock01Icon({
  iconName = 'mail-lock-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
