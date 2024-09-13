import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailLock02Icon({
  iconName = 'mail-lock-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
