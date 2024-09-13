import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlowCircleIcon({
  iconName = 'flow-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
