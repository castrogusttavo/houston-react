import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ParagraphSpacingIcon({
  iconName = 'paragraph-spacing',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
