import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StructureAddIcon({
  iconName = 'structure-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
