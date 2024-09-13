import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SendToMobileIcon({
  iconName = 'send-to-mobile',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
