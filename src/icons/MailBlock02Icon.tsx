import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailBlock02Icon({
  iconName = 'mail-block-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
