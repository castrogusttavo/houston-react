import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ProtectionMaskIcon({
  iconName = 'protection-mask',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
