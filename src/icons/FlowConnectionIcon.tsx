import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlowConnectionIcon({
  iconName = 'flow-connection',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
