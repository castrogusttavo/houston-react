import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SubnodeAddIcon({
  iconName = 'subnode-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
