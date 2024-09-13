import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BlenderIcon({ iconName = 'blender', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
