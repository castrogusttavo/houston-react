import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StructureFailIcon({
  iconName = 'structure-fail',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
