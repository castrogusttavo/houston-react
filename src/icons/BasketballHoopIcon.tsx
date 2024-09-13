import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BasketballHoopIcon({
  iconName = 'basketball-hoop',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
