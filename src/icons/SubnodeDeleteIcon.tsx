import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SubnodeDeleteIcon({
  iconName = 'subnode-delete',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
