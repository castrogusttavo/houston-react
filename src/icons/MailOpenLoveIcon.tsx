import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailOpenLoveIcon({
  iconName = 'mail-open-love',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
