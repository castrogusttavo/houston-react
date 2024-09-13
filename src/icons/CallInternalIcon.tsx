import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallInternalIcon({
  iconName = 'call-internal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
