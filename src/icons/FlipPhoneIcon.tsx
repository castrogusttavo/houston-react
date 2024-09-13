import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlipPhoneIcon({
  iconName = 'flip-phone',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
