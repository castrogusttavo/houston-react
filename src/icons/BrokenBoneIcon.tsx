import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BrokenBoneIcon({
  iconName = 'broken-bone',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
